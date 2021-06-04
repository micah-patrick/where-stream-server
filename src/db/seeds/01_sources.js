exports.seed = function (knex) {
    return knex("sources").insert([
        {
            source_name: "Netflix",
            source_url: "https://www.netflix.com/",
            source_img_url: "https://logosandtypes.com/wp-content/uploads/2020/07/netflix.svg"
        },
        {
            source_name: "Disney Plus",
            source_url: "https://www.disneyplus.com/",
            source_img_url: "https://noguiltfangirl.com/wp-content/uploads/2019/08/disneyplus-logo-e1565657560860.jpg"
        },
        {
            source_name: "Hulu",
            source_url: "https://www.hulu.com/",
            source_img_url: "https://icon-library.com/images/hulu-icon/hulu-icon-8.jpg"
        },
        {
            source_name: "Amazon Prime",
            source_url: "https://www.amazon.com/gp/video/storefront/",
            source_img_url: "https://store-images.s-microsoft.com/image/apps.12358.13510798887500496.0e727513-e018-4401-955f-2d54b8d73c76.1de91331-d294-467f-8fbd-b77e5bbc2f09"
        },
    ]);
};