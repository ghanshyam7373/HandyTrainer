const initApp = () => {

    const showBodymaps = () => {
        let checkValue = document.querySelector('input[name="gender"]:checked')
        if (checkValue) {
            if (checkValue.value === 'male') {
                document.getElementById('male-body-maps').style.display = "flex";
                document.getElementById('female-body-maps').style.display = "none";
                document.getElementById('Headinggender').innerHTML = "MALE";
            }
            if (checkValue.value === 'female') {
                document.getElementById('male-body-maps').style.display = "none";
                document.getElementById('female-body-maps').style.display = "flex";
                document.getElementById('Headinggender').innerHTML = "FEMALE";
            }
        }
    }
    showBodymaps()

    // videos js
    const videos = (muscleFor, vidUrl1, vidUrl2) => {
        let exercisePage = document.createElement('div');
        exercisePage.classList.add('exercisePage');
        let h1 = document.createElement('h1');
        h1.className = "p-3 mb-2 muscleFor";
        h1.setAttribute('id', 'muscleFor');
        h1.textContent = muscleFor.toUpperCase();
        let hr1 = document.createElement('hr');
        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        let p1 = document.createElement('p');
        p1.classList.add('exerciseDiff');
        p1.textContent = "Exercises for Home";
        let hr2 = document.createElement('hr');
        let exerciseVid1 = document.createElement('div');
        exerciseVid1.classList.add('exerciseVid');
        let iframe1 = document.createElement('iframe');
        iframe1.setAttribute('width', 760);
        iframe1.setAttribute('height', 415);
        iframe1.setAttribute('src', vidUrl1 + "?controls=0");
        iframe1.setAttribute('title', "YouTube video player");
        iframe1.setAttribute('frameborder', "0");
        iframe1.setAttribute('allow', "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        let hr3 = document.createElement('hr');
        let p2 = document.createElement('p');
        p2.classList.add('exerciseDiff');
        p2.textContent = "Exercises for Gym";
        let hr4 = document.createElement('hr');
        let exerciseVid2 = document.createElement('div');
        exerciseVid2.classList.add('exerciseVid');
        let iframe2 = document.createElement('iframe');
        iframe2.setAttribute('width', 760);
        iframe2.setAttribute('height', 415);
        iframe2.setAttribute('src', vidUrl2 + "?controls=0");

        // adding elements
        exerciseVid1.appendChild(iframe1);
        exerciseVid2.appendChild(iframe2);
        divContainer.appendChild(p1);
        divContainer.appendChild(hr2);
        divContainer.appendChild(exerciseVid1);
        divContainer.appendChild(hr3);
        divContainer.appendChild(p2);
        divContainer.appendChild(hr4);
        divContainer.appendChild(exerciseVid2);
        divContainer.appendChild(exerciseVid2);
        exercisePage.appendChild(h1);
        exercisePage.appendChild(hr1);
        exercisePage.appendChild(divContainer);

        return exercisePage;
    }

    const AddExercisePage = (muscleFor, vidUrl1, vidUrl2) => {
        document.querySelector('body').appendChild(videos(muscleFor, vidUrl1, vidUrl2));
    }


    // Female Videos
    document.getElementById('abdominalsf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('abdominals', "https://www.youtube.com/embed/1f8yoFFdkcY", "https://www.youtube.com/embed/UqFzWx8X5AM")
    });
    document.getElementById('calvesf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('calves', "https://www.youtube.com/embed/-tJSMx4n6-g", "https://www.youtube.com/embed/YnDFhyO_2oo")
    });
    document.getElementById('calvesfs').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('calves', "https://www.youtube.com/embed/-tJSMx4n6-g", "https://www.youtube.com/embed/YnDFhyO_2oo")
    });
    document.getElementById('forearmsf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('forearms', "https://www.youtube.com/embed/HxCBkeg6moU", "https://www.youtube.com/embed/mqr60rt4qzU")
    });
    document.getElementById('forearmsfs').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('forearms', "https://www.youtube.com/embed/HxCBkeg6moU", "https://www.youtube.com/embed/mqr60rt4qzU")
    });
    document.getElementById('bicepsf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('biceps', "https://www.youtube.com/embed/KzZILhT_YvY", "https://www.youtube.com/embed/P38dvlRXYq8")
    });
    document.getElementById('shouldersf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('shoulders', "https://www.youtube.com/embed/LjZGYQLL6R8", "https://www.youtube.com/embed/ClBKkGlgMms")
    });
    document.getElementById('shouldersfs').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('shoulders', "https://www.youtube.com/embed/LjZGYQLL6R8", "https://www.youtube.com/embed/ClBKkGlgMms")
    });
    document.getElementById('chestf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('chest', "https://www.youtube.com/embed/a9vL6BsgkPg", "https://www.youtube.com/embed/9K2NVgR14BI")
    });
    document.getElementById('trapsf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('traps', "https://www.youtube.com/embed/bkLEWXwkDxM", "https://www.youtube.com/embed/Zxl4jkMhIME")
    });
    document.getElementById('trapsfs').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('traps', "https://www.youtube.com/embed/bkLEWXwkDxM", "https://www.youtube.com/embed/Zxl4jkMhIME")
    });
    document.getElementById('hamstringsf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('hamstrings', "https://www.youtube.com/embed/9N3kVU_tj7s", "https://www.youtube.com/embed/OZiliFcYxsA")
    });
    document.getElementById('glutesf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('glutes', "https://www.youtube.com/embed/yV7fDgNlYKM", "https://www.youtube.com/embed/WBhAuaLX2CE")
    });
    document.getElementById('lowerbackf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('lowerback', "https://www.youtube.com/embed/Jr5iNeaWuxQ", "https://www.youtube.com/embed/2nDt5D1g2GU")
    });
    document.getElementById('latsf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('lats', "https://www.youtube.com/embed/aW45a1KFBjM", "https://www.youtube.com/embed/EFEym-FgFVA")
    });
    document.getElementById('tricepsf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('triceps', "https://www.youtube.com/embed/KzBZ02EAJvE", "https://www.youtube.com/embed/_LqX4o2vftI")
    });
    document.getElementById('quadsf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('quads', "https://www.youtube.com/embed/C5aHk9mrLv8", "https://www.youtube.com/embed/0H6BCsKhx7w")
    });
    document.getElementById('obliquesf').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('obliques', "https://www.youtube.com/embed/_n-lsUW-Zg4", "https://www.youtube.com/embed/8J6fvAtPBtI")
    });
    document.getElementById('traps_middlef').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('traps_middle', "https://www.youtube.com/embed/bkLEWXwkDxM", "https://www.youtube.com/embed/P8pUyd3AO6E")
    });


    // Male Videos
    document.getElementById('abdominals').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('abdominals', "https://www.youtube.com/embed/IrA9dvgRKR0", "https://www.youtube.com/embed/k1cLRd7cahQ")
    });
    document.getElementById('calves').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('calves', "https://www.youtube.com/embed/QuIvqr40At4", "https://www.youtube.com/embed/uVu9vToACiQ")
    });
    document.getElementById('forearms').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('forearms', "https://www.youtube.com/embed/q5lW-tTY1Zw", "https://www.youtube.com/embed/H1z3Gzf2TG8")
    });
    document.getElementById('calvesms').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('calves', "https://www.youtube.com/embed/QuIvqr40At4", "https://www.youtube.com/embed/uVu9vToACiQ")
    });
    document.getElementById('forearmsms').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('forearms', "https://www.youtube.com/embed/q5lW-tTY1Zw", "https://www.youtube.com/embed/H1z3Gzf2TG8")
    });
    document.getElementById('biceps').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('biceps', "https://www.youtube.com/embed/wwKb-wZCEjs", "https://www.youtube.com/embed/FH96h-Pnphg")
    });
    document.getElementById('shoulders').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('shoulders', "https://www.youtube.com/embed/tKU64bd4gaw", "https://www.youtube.com/embed/mUbnnR9ClJk")
    });
    document.getElementById('shouldersms').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('shoulders', "https://www.youtube.com/embed/tKU64bd4gaw", "https://www.youtube.com/embed/mUbnnR9ClJk")
    });
    document.getElementById('chest').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('chest', "https://www.youtube.com/embed/3A_wwcZeZjI", "https://www.youtube.com/embed/lWXhih3xbVc")
    });
    document.getElementById('traps').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('traps', "https://www.youtube.com/embed/VSZdIi6Iffs", "https://www.youtube.com/embed/tUIHISxQ8DM")
    });
    document.getElementById('trapsms').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('traps', "https://www.youtube.com/embed/VSZdIi6Iffs", "https://www.youtube.com/embed/tUIHISxQ8DM")
    });
    document.getElementById('hamstrings').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('hamstrings', "https://www.youtube.com/embed/2PAm7gEVCAg", "https://www.youtube.com/embed/4J0UeBbljvY")
    });
    document.getElementById('glutes').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('glutes', "https://www.youtube.com/embed/GHBVM3P63ds", "https://www.youtube.com/embed/607lV-MIjCg")
    });
    document.getElementById('lowerback').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('lowerback', "https://www.youtube.com/embed/cVnIAfmEox0", "https://www.youtube.com/embed/jJC9toX5Wa8")
    });
    document.getElementById('lats').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('lats', "https://www.youtube.com/embed/CdzpPveBDVc", "https://www.youtube.com/embed/s8taXR3mYa8")
    });
    document.getElementById('triceps').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('triceps', "https://www.youtube.com/embed/gre8lBLSH7w", "https://www.youtube.com/embed/dhGnHk_d6vc")
    });
    document.getElementById('quads').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('quads', "https://www.youtube.com/embed/UKM_3T2-Huc", "https://www.youtube.com/embed/TC8ui7WkOao")
    });
    document.getElementById('obliques').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('obliques', "https://www.youtube.com/embed/UCyseHdiS1M", "https://www.youtube.com/embed/TC19ppdD7kE")
    });
    document.getElementById('traps_middle').addEventListener('click', () => {
        document.getElementById('MainPage').style.display = "none";
        document.getElementById('exercisePageDiv').style.display = "block";
        AddExercisePage('traps_middle', "https://www.youtube.com/embed/gnjInEwp4oQ", "https://www.youtube.com/embed/REjTNe0sJRQ")
    });
}

window.onload = ()=>{
        initApp();
}