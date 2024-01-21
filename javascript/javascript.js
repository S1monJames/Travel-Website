            var video = document.querySelector(".video");

            var options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            };

            function handleIntersection(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                   
                        video.play();
                    } else {
                      
                        video.pause();
                    }
                });
            }

            var observer = new IntersectionObserver(handleIntersection, options);
            observer.observe(video);

            video.volume = 1.0; // Setze die Lautstärke auf den Maximalwert (1.0)
