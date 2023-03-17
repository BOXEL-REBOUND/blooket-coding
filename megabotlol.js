(async () => { 
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/factory/setAllMegaBot.js")?.answers?.[0]}`)).then(async x => {
        if (1678659460142 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({
                blooks: new Array(10).fill({
                    name: "Mega Bot",
                    color: "#d71f27",
                    class: "🤖",
                    rarity: "Legendary",
                    cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                    time: [5, 5, 3, 3, 3],
                    price: [7e6, 12e7, 19e8, 35e9],
                    active: false,
                    level: 4,
                    bonus: 5.5
                })
            });
        }
    });
})();
