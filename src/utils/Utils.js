export const convertRank = (rank, suit) => {
    return `${rank}, ${suit}`;
};


export const start = 'Start';
export const game = 'Game';
export const result = 'Result';
export const sort = sortArr();


export function shuffle(sort){
    const res1 = [...sort];
    let j, temp;
    for(let i = res1.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = res1[j];
        res1[j] = res1[i];
        res1[i] = temp;
    }
    return sort;
}


function sortArr () {
    const res = [];
    const arr = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];



    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < 13; j++){
            let a = {
                rank: j,
                suit: arr[i]
            }
            res.push(a)
        }
    }
    return res

}