// this is nav bar page. 

// main scirpt page 

Vue.component("my-header", {
    data: function () {
        return {
            logo: "logo",
        }
    },
    template:
    `<div style="display: flex; justify-content-between">
        <div> logo </div>
        <div class="nav_link">
            <ul style="display:flex">
                <li style="list-style-type:none"><a style="text-decoration:none" href="#"> home</a></li>
        </div>
    </div>`,
})

