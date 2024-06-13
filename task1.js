document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const footerItems = document.querySelectorAll('.footer-item');
    let currentIndex = 3; // Assuming the highlighted item is the 4th one, index starts at 0.

    function highlightItem(index) {
        footerItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('highlight-item');
            } else {
                item.classList.remove('highlight-item');
            }
        });
    }

    function updateMainContent(index) {
        const mainContent = [
            {
                title: "ITWorx Achieves EcoVadis Silver Certification, Ranks in...",
                date: "Jan 10",
                description: "Details about the EcoVadis Silver Certification...",
                buttonText: "Read More"
            },
            {
                title: "Your Feedback Matters: Participate in the TPM Check...",
                date: "Jan 12",
                description: "Your participation in the TPM Check is invaluable...",
                buttonText: "Participate Now"
            },
            {
                title: "Internal Satisfaction Survey H1 2023: Check out the Results!",
                date: "Jan 14",
                description: "The results of the H1 2023 satisfaction survey are in...",
                buttonText: "View Results"
            },
            {
                title: "Coded Summer 2023: The #SuperHuman Edition!",
                date: "Jan 15",
                description: "Edge has officially moved its Employee Experience Platform EdgeHub from Dozen V2 to Dozen V3 - the project started in Q1 this year and included Onboarding activities,",
                buttonText: "button text"
            }
        ];

        const content = mainContent[index];
        document.querySelector('.content h2').textContent = content.title;
        document.querySelector('date').textContent = content.date;
        document.querySelector('.content p').textContent = content.description;
        document.querySelector('.content button').textContent = content.buttonText;
    }

    function showPreviousItem() {
        if (currentIndex > 0) {
            currentIndex--;
            highlightItem(currentIndex);
            updateMainContent(currentIndex);
        }
    }

    function showNextItem() {
        if (currentIndex < footerItems.length - 1) {
            currentIndex++;
            highlightItem(currentIndex);
            updateMainContent(currentIndex);
        }
    }

    prevButton.addEventListener('click', showPreviousItem);
    nextButton.addEventListener('click', showNextItem);

 
    highlightItem(currentIndex);
    updateMainContent(currentIndex);
});
