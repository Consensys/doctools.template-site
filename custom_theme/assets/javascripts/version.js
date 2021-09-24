// default version list in case of JSON loading issue
let versions = ['latest'];
const DEFAULT_VERSION = Object.keys(versions)[0];

// is the version passed as param the one displayed accoring to the url
function isDisplayedVersion(version){
  return site_current_version === version;
}

// Update the drop down list and set active version
function updateVersionsDropDown(versions, currentLanguage, currentVersion){
  $("#__version").empty();
  $.each( versions.versions[currentLanguage], function( index, version ) {
    // var item = $( `<a class="version-number-item dropdown-item" href="#${version}">${version}${sourceText}</a>" `);
    var item = $( `<option value="${version}">${version}</option>" `);

    if(isDisplayedVersion(version)){
      item.attr("selected","selected");
      // $('#dropdownMenuButton').text(`${version}${sourceText}`);
      document.title = `${document.title} - ${version}`;
    }

    item.appendTo("#__version");
  });
}

// set the global versions value from the Json file,
// update spec page on completions
function getVersionsFromJsonFile(){
  $.ajaxSetup({ cache: false });
  $.getJSON( site_version_json, function( data ) {
    if(!jQuery.isEmptyObject(data)){ versions = data; }
  })
  .always(
    function() {
      updateVersionsDropDown(versions, site_current_language, site_current_version);
    }
  );
}

$(function() {
  getVersionsFromJsonFile();
});
