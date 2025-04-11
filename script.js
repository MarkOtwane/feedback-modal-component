// DOM elements based on the id used in the div tags in the html
        const openModalBtn = document.getElementById('openModalBtn');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');
        const cancelBtn = document.getElementById('cancelBtn');
        const submitBtn = document.getElementById('submitBtn');
        const ratingOptions = document.querySelectorAll('.rating-option');
        
        let selectedRating = null;

        // Event Listeners when a button is clicked it causes this effect to the application
        openModalBtn.addEventListener('click', openModal);//calls the openModal()method/function
        modalClose.addEventListener('click', closeModal);//close modal function called here
        cancelBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
//when submit feedback button is clicked
        submitBtn.addEventListener('click', submitFeedback);

        // Set up rating options that when each of the reting option is clicked the active class to that specific rating
        ratingOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options
                ratingOptions.forEach(opt => opt.classList.remove('selected'));
                
                // the sected class becomes the active class
                this.classList.add('selected');
                
                // Save the selected rating local
                selectedRating = parseInt(this.getAttribute('data-value'));
            });
        });

        // Functions that causes the effect to the button selected
        function openModal() {
            modalOverlay.classList.add('active');
            // Resets all the selection to neutral
            ratingOptions.forEach(opt => opt.classList.remove('selected'));
            selectedRating = null;
        }

        function closeModal() {
            modalOverlay.classList.remove('active');
        }

        function submitFeedback() {
            if (selectedRating !== null) {
                    //variable interpolation
                console.log(`User rated: ${selectedRating}/10`);
                alert(`Thank you for your feedback! You rated: ${selectedRating}/10`);
                closeModal();
            } else {
                    //if the user has not submited the rating the form wont be submited
                alert('Please select a rating before submitting.');
            }
        }
