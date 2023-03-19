// api url
const api_url = "https://api.thingspeak.com/channels/2057016/feeds.json?api_key=MFMQ4VJBG2C34T3F&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("C").innerHTML = obj.field1;
      document.getElementById("K").innerHTML = obj.field2;
      document.getElementById("A").innerHTML = obj.field3;
      document.getElementById("L").innerHTML = obj.field4;
    });
}, 1000);