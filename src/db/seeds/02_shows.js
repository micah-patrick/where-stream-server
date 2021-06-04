exports.seed = function (knex) {
    return knex("shows").insert([
        {
            show_name: "Survivor",
            show_description: "A reality show where a group of contestants are stranded in a remote location with little more than the clothes on their back. The lone survivor of this contest takes home a million dollars.",
            show_img_url: "https://m.media-amazon.com/images/M/MV5BMzRjYjcyZTItNTA1Mi00YTVkLWE2Y2MtMmRlMzllODkyYzQ2XkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX182_CR0,0,182,268_AL_.jpg",
            show_type: "series"
        },
        {
            show_name: "Community",
            show_description: "A suspended lawyer is forced to enroll in a community college with an eccentric staff and student body.",
            show_img_url: "https://m.media-amazon.com/images/M/MV5BNDQ5NDZiYjktZmFmMy00MjAxLTk1MDktOGZjYTY5YTE1ODdmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UY268_CR2,0,182,268_AL_.jpg",
            show_type: "series"
        },
        {
            show_name: "Schitt's Creek",
            show_description: "When rich video-store magnate Johnny Rose and his family suddenly find themselves broke, they are forced to leave their pampered lives to regroup in Schitt's Creek.",
            show_img_url: "https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX182_CR0,0,182,268_AL_.jpg",
            show_type: "series"
        },
        {
            show_name: "Inception",
            show_description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            show_img_url: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            show_type: "movie"
        },
        {
            show_name: "The Mandalorian",
            show_description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
            show_img_url: "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg",
            show_type: "series"
        },
        {
            show_name: "Doctor Who",
            show_description: "The further adventures in time and space of the alien adventurer known as the Doctor and their companions from planet Earth.",
            show_img_url: "https://m.media-amazon.com/images/M/MV5BZWJhYjFmZDEtNTVlYy00NGExLWJhZWItNTAxODY5YTc3MDFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR4,0,182,268_AL_.jpg",
            show_type: "series"
        },
    ]);
};