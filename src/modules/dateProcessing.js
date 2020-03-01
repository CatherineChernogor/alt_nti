export let dateCleaner = (date) => {

    let data = date.split("T");
    let time = data[0];
    data = data[1].split(".")[0];
    time += '\t' + data + '\t';
    return time;
}