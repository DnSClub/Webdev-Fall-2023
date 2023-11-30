document.getElementById('fileInput').addEventListener(
    'change',
    readFile
)


function readFile(event)
{
    const reader = new FileReader()
    reader.addEventListener(
        'load',
        displayEntries
    )
    reader.readAsText(event.target.files[0])
}

function displayEntries(event)
{
    console.log(event.target.result)
}