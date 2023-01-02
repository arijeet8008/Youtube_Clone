
let show_results = () => {

    let data = JSON.parse(localStorage.getItem("youtube_data"));

    console.log(data);

    let cont = document.getElementById("result");
    cont.innerHTML = null

    data.forEach(({ id: { videoId }, snippet: { title }, snippet: { thumbnails: { medium: { url } } } }) => {

        let img = document.createElement("img");
        img.src = url;

        let p = document.createElement("p");
        p.innerText = title;

        let div = document.createElement("div");
        div.setAttribute("id", "videos_search");
        div.style.cursor = "pointer";
        div.addEventListener("click", () => {
            play_video(videoId)
        })

        div.append(img, p)
        cont.append(div)
    })

}

show_results()

let play_video = (video) => {

    localStorage.setItem("video", JSON.stringify(video))
    window.location.href = "video.html"

}
