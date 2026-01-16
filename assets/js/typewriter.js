class TypewriterEffect {

    constructor(elementId) {
        // Locate the target text element by its ID in the DOM
        this.element = document.getElementById(elementId);
        this.container = this.element.parentElement;

        // Preserve the initial text content for restoration and measurement
        this.originalText = this.element.textContent;

        // Initialize control variables for typing effect
        this.typingText = '';
        this.currentIndex = 0;
        this.timeouts = []; // Keep track of active timers
        this.measurer = null; // Element used for text width measurement

        // Retrieve typing effect settings from CSS custom properties
        this.settings = {
            preBlinkDuration: this.getCSSVar('--pbd'),
            typingSpeed: this.getCSSVar('--ts')
        };

        // Initialize the typewriter effect components
        this.init();
    }

    // Utility function to parse CSS variable values
    getCSSVar(name) {
        const value = getComputedStyle(document.documentElement).getPropertyValue(name);
        return parseInt(value) || parseInt(value.replace('ms', ''));
    }

    // Initialize the typewriter effect sequence
    init() {
        // Use the original text directly - preserve intentional line breaks
        this.typingText = this.originalText;
        
        // Calculate container height based on actual line breaks
        this.calculateContainerSize();
        
        // Begin the typing animation sequence
        this.startSequence();
    }

    // Calculate container height based on actual text lines
    calculateContainerSize() {
        // Count actual lines in the text (based on \n characters)
        const lines = this.typingText.split('\n').length;

        // Get the computed line height of the text
        const computedLineHeight = parseFloat(getComputedStyle(this.element).lineHeight);

        // Compute total height, adding padding for aesthetics
        const totalHeight = (lines + 0.5) * computedLineHeight;

        // Set container height to avoid layout shifting during typing
        this.container.style.height = `${totalHeight}px`;
    }

    // Start typing animation sequence after preparing
    startSequence() {
        // Clear text and reset index
        this.element.textContent = '';
        this.currentIndex = 0;

        // Set cursor blink animation before typing AND make element visible
        this.element.className = 'ready';

        // Delay before starting typing effect
        const blinkTimeout = setTimeout(() => {
            // Set typing class to keep element visible during animation
            this.element.className = 'typing';
            this.type();
        }, this.settings.preBlinkDuration);
        this.timeouts.push(blinkTimeout);
    }

    // Apply italic styling to quote portion only (not the author line)
    formatText(text) {
        const lines = text.split('\n');
        if (lines.length >= 2) {
            // All lines except the last one are the quote (italic)
            const quoteLines = lines.slice(0, -1).join('\n');
            const authorLine = lines[lines.length - 1];
            // Check if we've typed past the quote into the author line
            if (text.includes(authorLine) && text.indexOf(authorLine) < text.length) {
                return `<em>${quoteLines}</em>\n${authorLine}`;
            }
        }
        // During typing, check if we're still in quote portion
        return `<em>${text}</em>`;
    }

    // Display text with typing effect one character at a time
    type() {
        if (this.currentIndex < this.typingText.length) {
            // Update displayed text incrementally
            const currentText = this.typingText.slice(0, this.currentIndex + 1);

            // Find where the author line starts (last line)
            const lastNewline = this.typingText.lastIndexOf('\n');

            if (this.currentIndex >= lastNewline && lastNewline > 0) {
                // We're typing the author line - quote is complete
                const quoteText = this.typingText.slice(0, lastNewline);
                const authorText = this.typingText.slice(lastNewline, this.currentIndex + 1);
                this.element.innerHTML = `<em>${quoteText}</em>${authorText}`;
            } else {
                // Still typing the quote - all italic
                this.element.innerHTML = `<em>${currentText}</em>`;
            }

            this.currentIndex++;

            // Schedule next character display
            const timeout = setTimeout(() => this.type(), this.settings.typingSpeed);
            this.timeouts.push(timeout);
        } else {
            // Typing complete, trigger cursor blinking effect
            this.element.className = 'done';
        }
    }

    // Clean up resources and restore original text
    destroy() {
        // Cancel all active typing timers
        this.timeouts.forEach(timeout => clearTimeout(timeout));
        this.timeouts = [];

        // Restore original text content and reset styling
        if (this.element) {
            this.element.textContent = this.originalText;
            this.element.className = '';
        }
    }
}

// Initialize typewriter effect on page load and cleanup on unload
let typewriter = null;

function initTypewriter() {
    typewriter = new TypewriterEffect('home-subtitle');
}

function cleanup() {
    if (typewriter) {
        typewriter.destroy();
        typewriter = null;
    }
}

// Register event listeners for initialization and cleanup
addEventListener('load', initTypewriter);
addEventListener('beforeunload', cleanup);
addEventListener('pagehide', cleanup);

