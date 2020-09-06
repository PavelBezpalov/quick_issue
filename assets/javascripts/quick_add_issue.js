$(document).ready(function () {
  $("#projects-index a.project").each(function () {
    var addIssueStyles = "margin-left: 5px; opacity: 0.3;";
    var addIssueText = "(add)";
    var linkToProject = $(this);
    var addIssueHref = linkToProject.attr("href") + "/issues/new";
    var addIssueLink = $("<a>");
    addIssueLink.attr("href", addIssueHref);
    addIssueLink.attr("style", addIssueStyles);
    addIssueLink.text(addIssueText);
    $( this ).after(addIssueLink);
  })
});
