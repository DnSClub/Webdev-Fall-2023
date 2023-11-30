// event listener to read a file everytime it is uploaded
document.getElementById('fileInput').addEventListener(
    'change',
    readFile
)

let students = [] // empty until initialized

class Student 
{
    name
    major
    entryDate
    graduationDate
    gpa
    constructor(name, major, entryDate, graduationDate, gpa)
    {
        this.name = name
        this.major = major
        this.entryDate = entryDate
        this.graduationDate = graduationDate
        this.gpa = gpa
    }
}

// file upload handler
function readFile(event)
{
    const reader = new FileReader()
    // the load event happens when reader is done reading the file
    reader.addEventListener(
        'load',
        displayEntries
    )

    // begins reading, displayEntries() will be called once done
    reader.readAsText(event.target.files[0])
}

// displays entries in the HTML page
function displayEntries(event)
{
    const result = event.target.result.replaceAll('\n', '<br>') // replace newline between entries with a linebreak <br> tag
    document.getElementById('fileOutput').innerHTML = result
    
    // extract student information from data read
    createStudents(event.target.result)
}

function createStudents(textInput)
{
    students = [] // if the array was filled in before empty it, you can comment out this line and see what happens :)

    let entries = textInput.split('\n')
    entries = entries.slice(0, -1) // last line in data.txt is empty so we ignore it

    for (entry of entries)
    {
        const data = entry.split(',') // string array of name,major,entry,graduation,gpa

        entryStr = data[2].split('-')
        gradStr = data[3].split('-')

        students.push(new Student(
            data[0], 
            data[1], 
            new Date(entryStr[0], entryStr[1]-1, entryStr[2]), // month is implicitly converted to a number
            new Date(gradStr[0], gradStr[1]-1, gradStr[2]),
            parseFloat(data[4])
        ))
    }

    // sort students by GPA in ascending order
    students.sort((a, b) => {
        return a.gpa - b.gpa
    })

    showStudentProfiles()
}

function showStudentProfiles() {
    console.log(students)
    // could fill this in
}