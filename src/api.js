const HOST = localStorage.getItem("server")
const INTERFACE = localStorage.getItem("interface")
const PREFIX = HOST === "https://nontonanime.thedark38.repl.co" ? "/api" : "/api/"+INTERFACE
const API = {
    server : HOST+PREFIX,
    search : HOST+PREFIX+"/search/",
    info : HOST+PREFIX+"/anime/info/",
    episode : HOST+PREFIX+"/anime/episode/",
    getautostream: HOST+PREFIX+"/anime/episode/getautostream/",
    gettitle : HOST+PREFIX+"/anime/episode/gettitle/",
    getstream : HOST+PREFIX+"/anime/episode/getstream/",
    getmega : HOST+PREFIX+"/anime/episode/getmega/",
    getstreamdata: HOST+PREFIX+"/anime/episode/getstreamdata/",
    getallinfo:  HOST+PREFIX+"/anime/getallinfo/"
}

export default API 