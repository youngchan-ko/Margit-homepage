// ---------------------------------------Contact-------------------------



// ---------------------------------------Biography---------------------

function BiographyDeleteSaveEvent(){
    this.menuWrap = $('.menu_wrap');
    this.deleteSaveValue = $('#delete_insert')[0].value;
    this.biographyDeleteWrap = $('#biography_table_wrap')[0].innerHTML;
    this.biographyDeleteItem = $('#biography_table_item')[0].innerHTML;
    this.biographyInputTemplate = $('#biography_input_template')[0].innerHTML;
    this.saveBtn = $('.save_btn')[0];
    this.deleteBtn = $('.delete_btn')[0];
    this.makeDeleteMenu();
}
BiographyDeleteSaveEvent.prototype = {
    makeDeleteMenu : function(){
        if(this.menuWrap.nextAll('div').length > 0){
            this.menuWrap.nextAll('div').remove();
        }
        if(this.menuWrap.nextAll('table').length > 0){
            this.menuWrap.nextAll('table').remove();
        }
       
        switch(this.deleteSaveValue){
            case 'delete':
                var biographyDeleteTable = this.makeTable();
                this.menuWrap.after(biographyDeleteTable);
                this.saveBtn.style.display = 'none';
                this.deleteBtn.style.display = 'block';
                this.checkboxEvent();
                break;
                
            case'insert' : 
                this.menuWrap.after(this.biographyInputTemplate);
                this.saveBtn.style.display = 'block';
                this.deleteBtn.style.display = 'none';
                break;
        }
    },
    makeTable : function(){
        let testArray = [
            {"id": 1, "start_year": 2000, "end_year": 2000, "bio_text": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
            {"id": 2, "start_year": 2002, "end_year": 2004, "bio_text": "bbbbbbbbbbbbbbbbbbbbbbbbbbb"},
            {"id": 3, "start_year": 2020, "end_year": 2021, "bio_text": "ccccccccccccccccccccccccccc"}
        ];
        let tableItems = "";
        for(i=0; i<testArray.length; i++){
            tableItems += this.biographyDeleteItem.replace('{id}', testArray[i].id)
                                    .replace('{start_year}', testArray[i].start_year)
                                    .replace('{end_year}', testArray[i].end_year)
                                    .replace('{bio_text}', testArray[i].bio_text);
        }
        let biographyDeleteTable = this.biographyDeleteWrap.replace('{item_tr}', tableItems);
        return(biographyDeleteTable);
    },
    checkboxEvent : function(){
        let biographyCheckbox = $('.biography_item_check');
        biographyCheckbox.change(function(){
            if(biographyCheckbox.is(':checked')===true){
                this.deleteBtn.disabled = false;
                this.deleteBtn.style.backgroundColor="#F7381A";
            }else{
                this.deleteBtn.disabled = true;
                this.deleteBtn.style.backgroundColor="grey";
            }
        }.bind(this))
    }
}

// 바이오그라피 서브메뉴 선택에따른 뷰
function BiographySubMenuEvent(){
    this.menuWrap = $('.menu_wrap');
    this.biographySubtitle = $('#submenu')[0].value;
    this.newSubtitleInput = $('.new_subtitle_input_wrap')[0];
    this.selectDeleteInsert = $('.delete_insert_wrap')[0];
    this.biographyInputTemplate = $('#biography_input_template')[0].innerHTML;
    this.saveBtn = $('.save_btn')[0];
    this.deleteBtn = $('.delete_btn')[0];
    this.checkSubtitle();
}
BiographySubMenuEvent.prototype = {
    checkSubtitle : function(){
        if(this.menuWrap.nextAll('div').length > 0){
            this.menuWrap.nextAll('div').remove();
        }
        if(this.biographySubtitle === 'new_subtitle'){
            this.newSubtitleInput.style.display = 'inline-block';
            this.selectDeleteInsert.style.display = 'none';
            this.menuWrap.after(this.biographyInputTemplate);
            this.saveBtn.style.display = 'block';
            
        }else if(this.biographySubtitle === 'default'){
            this.newSubtitleInput.style.display = 'none';
            this.saveBtn.style.display = 'none';
            this.deleteBtn.style.display = 'none';
            this.selectDeleteInsert.style.display = 'none';
        }else{
            this.newSubtitleInput.style.display = 'none';
            this.selectDeleteInsert.style.display = 'inline-block';
            this.menuWrap.after(this.biographyInputTemplate);
            this.saveBtn.style.display = 'block';
            new BiographyDeleteSaveEvent();
            
        }
    }
}


// ---------------------------------------News---------------------

// 서브메뉴 갱신부터 살펴보기


// ------------------------------------Gallery--------------------


//갤러리 서브메뉴 선택후 저장, 삭제 선택시 이벤트
//deleteList템플릿 바꿔주기(함수를 만들어서 호출해주기)
function GalleryDeleteSaveEvent(){
    this.menuWrap = $('.menu_wrap');
    this.deleteSaveValue = $('#delete_insert')[0].value;
    this.deleteTemplate = $('#delete_preview_wrap')[0].innerHTML;
    this.deleteMenuWrap = $('.delete_img_wrap');
    this.deleteList = $('#delete_menu_item')[0].innerHTML;
    this.deleteBtn = $('.delete_btn')[0];
    this.imgTitle = $('.img_title_wrap')[0];
    this.imgExpl = $('.img_expl_wrap')[0];
    this.fileInput = $('.file_wrap')[0];
    this.saveBtn = $('.save_btn')[0];
    this.makeDeleteMenu();
}
GalleryDeleteSaveEvent.prototype = {
    makeDeleteMenu : function(){
        if(this.deleteSaveValue === 'delete'){
            this.imgTitle.style.display ='none';
            this.imgExpl.style.display ='none';
            this.fileInput.style.display ='none';
            this.saveBtn.style.display ='none';
            this.menuWrap.after(this.deleteTemplate);
            this.deleteBtn.style.display = 'block';
            $('.delete_ul').append(this.deleteList);
            this.checkboxEvent();
        }else{
            if(this.deleteMenuWrap.length > 0){
                this.deleteMenuWrap[0].style.display = 'none';
            }
            this.deleteBtn.style.display = 'none';
            this.imgTitle.style.display ='block';
            this.imgExpl.style.display ='block';
            this.fileInput.style.display ='block';
            this.saveBtn.style.display ='block';
        }
    },
    checkboxEvent : function(){
        let galleryCheckbox = $('.delete_img_check');
        galleryCheckbox.change(function(){
            if(galleryCheckbox.is(':checked')===true){
                this.deleteBtn.disabled = false;
                this.deleteBtn.style.backgroundColor="#F7381A";
            }else{
                this.deleteBtn.disabled = true;
                this.deleteBtn.style.backgroundColor="grey";
            }
        }.bind(this))
    }
}


//갤러리 업데이트시
//File 확장자 검사, add, delete
function CheckFileType(){
    this.fileTarget = document.querySelector('.gallery_upload_file');
    this.thumListTarget = document.querySelector('.item');
    this.thumImgTarget = document.querySelector('.item_thumb');
    this.cancelTarget = document.querySelector('.spr_book');
    this.fileTargetEvent();
}
CheckFileType.prototype = {
    fileTargetEvent : function(){
        this.fileTarget.addEventListener('change', function(){
            var image = event.target.files[0];
            var checkImageType = this.valideImageType(image.type);
            if(checkImageType){
                this.thumListTarget.style.display = 'inline-block';
                this.thumImgTarget.src = window.URL.createObjectURL(image);
                this.cancelEvent();
            }else{
                alert("Die Erweiterung der Bilddatei ist nur jpg und png.(이미지 파일의 확장자는 jpg와 png만 가능합니다.)");
            }
        }.bind(this))
    },
    valideImageType : function(imageType){
        const result = ([ 'image/jpeg',
                          'image/png',
                          'image/jpg' ].indexOf(imageType) > -1);
        return result;
    },
    cancelEvent : function(){
        this.cancelTarget.addEventListener('click', function(){
            this.thumListTarget.style.display = 'none';
            this.thumImgTarget.src = "";
            this.fileTarget.value = "";
        }.bind(this))
    }
}


//갤러리 서브폴더 값에따라
//이미지설명 인풋, 파일인풋, 저장버튼 보이기 이벤트
function GallerySubMenuEvent(){
    this.menuWrap = $('.menu_wrap');
    this.gallerySubtitle = $('#submenu')[0].value;
    this.newSubtitleInput = $('.new_subtitle_input_wrap')[0];
    this.imgTextareaTemplate = $('#gallery_img_expl')[0].innerHTML;
    this.selectDeleteInsert = $('.delete_insert_wrap')[0];
    this.fileInput = $('#file_wrap_template')[0].innerHTML;
    this.saveBtn = $('.save_btn')[0];
    this.deleteBtn = $('.delete_btn')[0];
    this.checkSubtitle();
}
GallerySubMenuEvent.prototype = {
    //갤러리 서브메뉴 선택에 따른 select와 input창 만들고 없애기
    checkSubtitle : function(){
        if(this.menuWrap.nextAll('div').length > 0){
            this.menuWrap.nextAll('div').remove();
        }
        if(this.gallerySubtitle === 'new_subtitle'){
            this.newSubtitleInput.style.display = 'inline-block';
            this.selectDeleteInsert.style.display = 'none';
            this.menuWrap.after(this.imgTextareaTemplate + this.fileInput);
            this.saveBtn.style.display = 'block';
            new CheckFileType();
        }else if(this.gallerySubtitle === 'default'){
            this.newSubtitleInput.style.display = 'none';
            this.saveBtn.style.display = 'none';
            this.deleteBtn.style.display = 'none';
            this.selectDeleteInsert.style.display = 'none';
        }else{
            this.newSubtitleInput.style.display = 'none';
            this.selectDeleteInsert.style.display = 'inline-block';
            this.menuWrap.after(this.imgTextareaTemplate + this.fileInput);
            this.saveBtn.style.display = 'block';
            new GalleryDeleteSaveEvent();
            new CheckFileType();
        }
    }
}


// -------------------------------------공통 로직------------------
//서브메뉴 갱신하기
function WriteSubmenu(submenu, mainValue) {
    this.mainValue = mainValue;
    this.gallerySubmenuTemplate = $('#subtitle_template')[0].innerHTML;
    this.gallerySubmenuOption = $('#select_options')[0].innerHTML;
    this.mainMenuWrap = $(".main_menu_wrap");
    this.deleteInsertWrap = $('.delete_insert_wrap')[0];
    this.saveBtn = $('.save_btn')[0];
    this.deleteBtn = $('.delete_btn')[0];
    this.submenu = submenu;
    this.writeSubtitles();
}
WriteSubmenu.prototype = {
    //subtitle option만들기
    makeOptions : function(){
        var options = '';
        for(i=0; i<this.submenu.length; i++){
            var optionValue = this.submenu[i];
            var optionInnerText = optionValue.charAt(0).toUpperCase() + optionValue.slice(1);
            var replaceOptions = this.gallerySubmenuOption.replace('{options}', optionValue)
                                                          .replace('{upper_options}', optionInnerText);
            options += replaceOptions;
        }
        $(".option_target").after(options);
    },
  
    //subtitle HTML만들기
    writeSubtitles : function(){
        if(this.mainMenuWrap.next().length > 0){
            this.mainMenuWrap.next().remove();
        }
        this.saveBtn.style.display = 'none';
        this.deleteBtn.style.display = 'none';
        var submenuHtml = this.gallerySubmenuTemplate.replaceAll('{main_value}',this.mainValue);
        this.mainMenuWrap.after(submenuHtml);
        this.makeOptions();
        for(i=0; i<$('.submenu_wrap').nextAll('div').length; i++){
            $('.submenu_wrap').nextAll('div')[i].style.display = 'none';
        }
    }
}

//메인메뉴 선택 이벤트
//ajax로 Submenu받아와서 바꿔주기
//--------------------------------------------log지우기
function mainMenuEvent(){
    var mainMenu = document.querySelector('#main_menu');
    if($('.menu_wrap').nextAll('div').length > 0){
        $('.menu_wrap').nextAll('div').remove();
    }
    switch(mainMenu.value){
        case 'default':
            $('.menu_wrap').nextAll('div').remove();
            for(i=0; i<$('.main_menu_wrap').nextAll('div').length; i++){
                $('.main_menu_wrap').nextAll('div')[i].style.display = 'none';
            }
            for(i=0; i<$('.menu_wrap').nextAll('button').length; i++){
                $('.menu_wrap').nextAll('button')[i].style.display = 'none';
            }
            console.log(mainMenu.value);
            break;

        case 'skulptur':
        case 'zeichnung': 
        case 'objekt':
            var examGallerySubmenu = ['objekt','trophäen'];
            
            console.log(mainMenu.value);
            new WriteSubmenu(examGallerySubmenu,'Gallery');
            break;

        case 'News':
            var examNewsSubmenu = ['neue Text(new text)','Änderung(modify)','Löschung(delete)'];
            console.log(mainMenu.value);
            new WriteSubmenu(examNewsSubmenu,mainMenu.value);
            break;
        
        case 'Biography':
            var examBiographySubmenu = ['basis','einzelausstellungen','gruppenausstellungen','lesungen','ankäufe - Stipendien'];
            console.log(mainMenu.value);
            new WriteSubmenu(examBiographySubmenu,mainMenu.value);
            break;
        
        case 'Contact':
            console.log(mainMenu.value);
            break;
    }
};


