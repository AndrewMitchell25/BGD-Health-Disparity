const get_news = () => {

    fetch(`http://api.mediastack.com/v1/news?access_key=62a3d2ebfdebb697d05628261c4ad3e0`)
        .then((response) => response.json())
        .then((json) => console.log(json));
}