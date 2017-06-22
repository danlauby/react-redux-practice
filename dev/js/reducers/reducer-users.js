    /*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

 export default function () {
  return [
   {
     id: 1,
     first: "Trent",
     last: "the Magician",
     age: 5,
     description: "Is the coolest kid on the block.",
     thumbnail: "https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/dc/mugshots/mugshot%202016/76061_1to1_mf_batman_336.png?l.r2=-798905063"
   },
   {
     id: 2,
     first: "Daniel",
     last: "the Dad",
     age: 37,
     description: "Ain't too bad either.",
     thumbnail: "https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/lbm%20characters/primary/70902_1to1_robin_360_480.png?l.r2=-84004269"
   },
   {
     id: 3,
     first: "Voltron",
     last: "Defender of the Unviverse",
     age: 100000000009,
     description: "Is the coolest giant robot, formed by small lion robots, driven by kids.",
     thumbnail: "http://www.cheatsheet.com/wp-content/uploads/2016/02/voltron-164801.jpg"
   }
 ]
}
