
/**
 * VANTAGE CORE CONTROL SCRIPT
 * Functional Logic for Navigation, Slider, Ratings, and Forms
 */

// --- MODULE 1: PAGE INITIALIZATION ---
window.onload = () => {
    [span_2](start_span)// Set Home as the default visible section[span_2](end_span)
    showPage('home');
    [span_3](start_span)[span_4](start_span)// Start the automated cycling for the luxury slider[span_3](end_span)[span_4](end_span)
    startSliderTimer();
};

// --- MODULE 2: NAVIGATION ---
function showPage(pageId) {
    [span_5](start_span)// Hide all sections and remove active states[span_5](end_span)
    const sections = ['home', 'products', 'trustees', 'events', 'appointments'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });

    [span_6](start_span)// Display the requested page[span_6](end_span)
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0); // Reset scroll for premium feel
    }
}

// --- MODULE 3: IMAGE SLIDER ---
let currentSlide = 0;
const totalSlides = 2; [span_7](start_span)// Based on your Midnight Silk and Executive Slim-Fit slides[span_7](end_span)
let sliderTimer = null;

function updateSlider() {
    const track = document.getElementById('sliderTrack');
    if (track) {
        [span_8](start_span)// Move track based on current slide index[span_8](end_span)
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function startSliderTimer() {
    [span_9](start_span)[span_10](start_span)// Auto-advance every 4000ms as specified in the logic[span_9](end_span)[span_10](end_span)
    sliderTimer = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 4000);
}

// --- MODULE 4: STAR RATINGS ---
const ratings = {}; [span_11](start_span)// Store selections: { productId: value }[span_11](end_span)
const labelMap = { 
    1: "POOR", 2: "FAIR", 3: "GOOD", 4: "GREAT", 5: "EXCELLENT!" 
[span_12](start_span)};[span_12](end_span)

function hoverRating(productId, value) {
    const stars = document.querySelectorAll(`[data-id="${productId}"] .star-rating span`);
    stars.forEach((star, index) => {
        [span_13](start_span)// Highlight stars up to the hovered value[span_13](end_span)
        star.classList.toggle('hovered', index < value);
    });
}

function clearHover(productId) {
    const stars = document.querySelectorAll(`[data-id="${productId}"] .star-rating span`);
    stars.forEach(star => star.classList.remove('hovered'));
    
    [span_14](start_span)// Restore the previously saved rating if it exists[span_14](end_span)
    const saved = ratings[productId] || 0;
    stars.forEach((star, index) => {
        star.classList.toggle('selected', index < saved);
    });
}

function setRating(productId, value) {
    [span_15](start_span)ratings[productId] = value;[span_15](end_span)
    const label = document.getElementById(`label-${productId}`);
    [span_16](start_span)[span_17](start_span)if (label) label.innerText = labelMap[value];[span_16](end_span)[span_17](end_span)
    
    [span_18](start_span)// Lock in the selection visually[span_18](end_span)
    const stars = document.querySelectorAll(`[data-id="${productId}"] .star-rating span`);
    stars.forEach((star, index) => {
        star.classList.toggle('selected', index < value);
    });
}

// --- MODULE 7: APPOINTMENT FORM ---
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.onsubmit = function(e) {
        [span_19](start_span)e.preventDefault();[span_19](end_span)
        
        const name = document.getElementById('clientName').value;
        const feedback = document.getElementById('clientFeedback').value.trim();
        
        let message = "";
        [span_20](start_span)// Logic for handling feedback-inclusive messages[span_20](end_span)
        if (feedback !== "") {
            message = `Thank you ${name}! [span_21](start_span)Your VANTAGE appointment and feedback were received.`;[span_21](end_span)
        } else {
            message = `Thank you ${name}! [span_22](start_span)Your VANTAGE appointment was received.`;[span_22](end_span)
        }
        
        [span_23](start_span)alert(message);[span_23](end_span)
    };
}
