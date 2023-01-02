//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyBt8sh7fn5P5-h6EncIEFE3sA003XYt4Rc

//https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyBt8sh7fn5P5-h6EncIEFE3sA003XYt4Rc

let api_key = "AIzaSyBt8sh7fn5P5-h6EncIEFE3sA003XYt4Rc"

let show_data = async () => {

    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${api_key}`
    let res = await fetch(url);
    let { items } = await res.json();
    let data = items;
    append(data)
    console.log(data);

}
show_data()

let append = (data) => {

    let cont = document.getElementById("popular_videos");
    cont.innerHTML = null;

    data.forEach((el) => {

        let img = document.createElement("img");
        img.src = el.snippet.thumbnails.medium.url;

        let p = document.createElement("p");
        p.innerText = el.snippet.title;

        let div = document.createElement("div");
        div.setAttribute("id", "videos_popular");
        div.style.cursor = "pointer";
        div.addEventListener("click", () => {
            pp_video(el.id)
        })

        div.append(img, p)
        cont.append(div);
       
    })
}

let get_data = async () => {

    let query = document.getElementById("query").value;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;

    let res = await fetch(url);
    let { items } = await res.json();
    let x = items
    localStorage.setItem("youtube_data", JSON.stringify(x))

    window.location.href = "result.html"
}

let pp_video = (id)=>{

    localStorage.setItem("video",JSON.stringify(id));
    console.log(id)
    window.location.href="video.html"

}