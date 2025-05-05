document.querySelector(".nav-links").classList.toggle("active");
;
const texts = ["Web Designer", "Frontend Developer", "Creative Thinker"];
        let index = 0;
        let letterIndex = 0;
        const dynamicText = document.getElementById("dynamic-text");

        function typeEffect() {
            if (letterIndex < texts[index].length) {
                dynamicText.innerHTML += texts[index].charAt(letterIndex);
                letterIndex++;
                setTimeout(typeEffect, 100);
            } else {
                setTimeout(eraseEffect, 2000);
            }
        }

        function eraseEffect() {
            if (letterIndex > 0) {
                dynamicText.innerHTML = texts[index].substring(0, letterIndex - 1);
                letterIndex--;
                setTimeout(eraseEffect, 50);
            } else {
                index = (index + 1) % texts.length;
                setTimeout(typeEffect, 500);
            }
        }

        typeEffect();
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form resubmission
            
            // Simulate saving the message
            document.getElementById("successMessage").style.display = "block";
            
            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        });