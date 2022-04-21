//add the toolbar options
var myToolbar = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{
        'color': []
    }, {
        'background': []
    }],
    [{
        'font': []
    }],
    [{
        'align': []
    }],
    ['link'],

    ['clean'],
    ['image'] //add image here
];


var quill = new Quill('#description', {
    theme: 'snow',
    modules: {
        imageResize: {
            displaySize: true
          },
        toolbar: {
            container: myToolbar,
            handlers: {
                image: imageHandler
            }
        }
    },
});


function imageHandler() {
    var range = this.quill.getSelection();
    var value = prompt('please copy paste the image url here.');
    if (value) {
        this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
        console.log(this.quill);
    }
}
