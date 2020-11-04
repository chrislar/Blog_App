export const posts=[
    {
        "id":"1",
        "title":"When Messi stops playing, i will throw away my television",
        "author":"",
        "content":"Barcelona put together a brilliant performance against Juventus on Wednesday night as they won 2-0 and Christian Vieri was fully of praise for Lionel Messi afterwards.Even though Vieri hopes Messi still has a lot more left in the tank, he looked ahead to the day when the No.10 hangs up his boots. Messi is a magician, he's the Harry Potter of soccer, Vieri said on CBS Sports. When he stops playing, I'm throwing my TV away. I'm not going to work anymore on TV. I'm going to watch Netflix, that's it, because when he stops there's nothing else to watch. Reflecting on the game in general, Vieri explained that Juventus were fortunate to escape with just a two-goal defeat. It was amazing from Barcelona, there was no game, he said.They could've scored six or seven goals easily. They played fantastic.",
        "upvote":0,
        "downvote":0
    },

    {
        "id":"2",
        "title":"My first blog post",
        "author":"Chris Lar",
        "content":"It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.",
        "upvote":0,
        "downvote":0
    },

    {
        "id":"3",
        "title":"My first blog post",
        "author":"Chris Lar",
        "content":"",
        "upvote":0,
        "downvote":0
    },

    {
        "id":"4",
        "title":"My first blog post",
        "author":"Chris Lar",
        "content":"It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.",
        "upvote":0,
        "downvote":0
    }

]

export function getPostByID(id) {
    return posts.filter( post => post.id === id )[0]
    
} 