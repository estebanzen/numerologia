
function logger(theLog) {
    console.table(theLog);

    $('.logger')
        .prepend('<hr>')
        .prepend(theLog);

}
