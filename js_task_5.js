// Date and Time Display Script
        // Display current date and time
        function updateDateTime() {
            let today = new Date();

            document.getElementById("currentDate").textContent =
                today.toDateString();

            document.getElementById("currentTime").textContent =
                today.toLocaleTimeString();

            // Get date details
            document.getElementById("day").textContent =
                today.getDate();

            document.getElementById("month").textContent =
                today.getMonth() + 1;

            document.getElementById("year").textContent =
                today.getFullYear();

            let weekdays = [
                "Sunday", "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday"
            ];

            document.getElementById("weekday").textContent =
                weekdays[today.getDay()];

            // Week number using 7-day blocks
            document.getElementById("week").textContent =
                Math.ceil(today.getDate() / 7);

            // Check leap year
            let year = today.getFullYear();

            if (
                (year % 4 === 0 && year % 100 !== 0) ||
                year % 400 === 0
            ) {
                document.getElementById("leapYear").textContent =
                    "Yes";
            } else {
                document.getElementById("leapYear").textContent =
                    "No";
            }

            // Calculate date after 10 days
            let futureDate = new Date(today);
            futureDate.setDate(futureDate.getDate() + 10);

            document.getElementById("futureDate").textContent =
                futureDate.toDateString();
        }

        // Update date using a user-entered year
        function changeYear() {
            let year = Number(
                document.getElementById("yearInput").value
            );

            if (
                !Number.isInteger(year) ||
                year < 1 ||
                year > 9999
            ) {
                document.getElementById("updatedDate").textContent =
                    "Please enter a valid year (1–9999).";
                return;
            }

            let updated = new Date();
            updated.setFullYear(year);

            document.getElementById("updatedDate").textContent =
                updated.toLocaleString("en-IN", {
                    dateStyle: "full",
                    timeStyle: "medium"
                });
        }

        // Run once, then update the clock every second
        updateDateTime();
        setInterval(updateDateTime, 1000);
    