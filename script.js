let videoChecked = false;


/* ============================= */
/* CHANGE QUALITY */
/* ============================= */

function changeQuality() {

    let type = document.getElementById("type").value;

    let quality = document.getElementById("quality");


    /* AUDIO */

    if (type === "audio") {

        quality.innerHTML = `

            <option value="64">
                64 kbps
            </option>

            <option value="128">
                128 kbps
            </option>

            <option value="192">
                192 kbps
            </option>

            <option value="320">
                320 kbps
            </option>

        `;

    }


    /* VIDEO */

    else {

        quality.innerHTML = `

            <option value="360">
                360p
            </option>

            <option value="480">
                480p
            </option>

            <option value="720" selected>
                720p
            </option>

            <option value="1080">
                1080p
            </option>

        `;
    }
}


/* ============================= */
/* CHECK VIDEO */
/* ============================= */

async function checkVideo() {

    let url =
        document.getElementById("videoUrl").value.trim();


    let quality =
        document.getElementById("quality").value;


    let type =
        document.getElementById("type").value;


    let result =
        document.getElementById("result");


    /* EMPTY URL */

    if (url === "") {

        alert("Please enter a video URL");

        return;
    }


    result.style.display = "block";

    result.innerHTML =
        "Checking URL...";


    /*
       BACKEND CONNECTION

       Backend must be running
       on localhost:8080
    */

    try {

        let response = await fetch(

            "http://localhost:8080/api/check",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    url: url,

                    quality: quality,

                    type: type

                })

            }

        );


        let data =
            await response.json();


        videoChecked =
            data.valid;


        result.innerHTML = `

            <strong class="${data.valid
                ? "success"
                : "error"}">

                ${data.message}

            </strong>

            <br><br>

            Quality:
            ${type === "audio"
                ? quality + " kbps"
                : quality + "p"}

            <br>

            Type:
            ${type}

        `;

    }


    catch (error) {

        videoChecked = false;


        result.innerHTML = `

            <strong class="error">

                Backend connection failed.

            </strong>

            <br><br>

            Make sure your Java
            Spring Boot server is running.

        `;
    }
}


/* ============================= */
/* DOWNLOAD */
/* ============================= */

async function startDownload() {

    if (!videoChecked) {

        alert(
            "First check the video URL."
        );

        return;
    }


    let url =
        document.getElementById("videoUrl")
            .value.trim();


    let quality =
        document.getElementById("quality")
            .value;


    let type =
        document.getElementById("type")
            .value;


    try {

        let response = await fetch(

            "http://localhost:8080/api/download",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    url: url,

                    quality: quality,

                    type: type

                })

            }

        );


        if (!response.ok) {

            alert(
                "Download request failed."
            );

            return;
        }


        let blob =
            await response.blob();


        let downloadUrl =
            URL.createObjectURL(blob);


        let link =
            document.createElement("a");


        link.href =
            downloadUrl;


        if (type === "audio") {

            link.download =
                "audio-file";

        } else {

            link.download =
                "video-file";

        }


        document.body.appendChild(link);


        link.click();


        link.remove();


        URL.revokeObjectURL(
            downloadUrl
        );

    }


    catch (error) {

        alert(
            "Could not connect to backend."
        );

    }

}