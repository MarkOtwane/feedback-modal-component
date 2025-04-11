// DOM elements
        const openModalBtn = document.getElementById('openModalBtn');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');
        const cancelBtn = document.getElementById('cancelBtn');
        const submitBtn = document.getElementById('submitBtn');
        const ratingOptions = document.querySelectorAll('.rating-option');
        
        let selectedRating = null;

        // Event Listeners
        openModalBtn.addEventListener('click', openModal);
        modalClose.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
        submitBtn.addEventListener('click', submitFeedback);

        // Set up rating options
        ratingOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options
                ratingOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Save the selected rating
                selectedRating = parseInt(this.getAttribute('data-value'));
            });
        });

        // Functions
        function openModal() {
            modalOverlay.classList.add('active');
            // Reset selection
            ratingOptions.forEach(opt => opt.classList.remove('selected'));
            selectedRating = null;
        }

        function closeModal() {
            modalOverlay.classList.remove('active');
        }

        function submitFeedback() {
            if (selectedRating !== null) {
                console.log(`User rated: ${selectedRating}/10`);
                alert(`Thank you for your feedback! You rated: ${selectedRating}/10`);
                closeModal();
            } else {
                alert('Please select a rating before submitting.');
            }
        }
