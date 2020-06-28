function getParam(sname) {
    var params = location
        .search
        .substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) {
            sval = temp[1];
        }
    }
    return sval;
}
function doPage(page) {
    var pageHtml = "";
    var b1 = page * 1 - 2;
    var b2 = page * 1 + 3;
    if (page == 1 || page == 2) {
        b1 = 1;
        b2 = 6;
    }
    for (var i = b1; i < page * 1; i++) {
        pageHtml += makePage(i, "");
    }
    pageHtml += makePage(page, "active");
    for (var i = page * 1 + 1; i < b2; i++) {
        pageHtml += makePage(i, "");
    }
    //console.log(pageHtml);
    $('#main-page').append(pageHtml);
}
function makePage(page, active) {
    var href = window.location.href;
    var href2 = updateURLParameter(href, "page", page);
    return '<li class="page-item ' + active + '"><a class="page-link" href="' +
            href2 + '">' + page + '</a></li>';
}
function updateURLParameter(url, param, paramVal) {
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    if (additionalURL) {
        tempArray = additionalURL.split("&");
        for (var i = 0; i < tempArray.length; i++) {
            if (tempArray[i].split('=')[0] != param) {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }
    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}