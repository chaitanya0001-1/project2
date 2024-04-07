document.addEventListener('DOMContentLoaded', function() {
    const models = document.querySelectorAll('.model');
    const modelDescriptions = document.querySelectorAll('.model-description');

    models.forEach((model, index) => {
        model.addEventListener('click', function() {
            modelDescriptions.forEach((desc, descIndex) => {
                if (index === descIndex) {
                    desc.style.display = 'block';
                } else {
                    desc.style.display = 'none';
                }
            });
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        console.log(formDataObject);
        // Here you can handle form submission, like sending data to a server using AJAX
    });
});
