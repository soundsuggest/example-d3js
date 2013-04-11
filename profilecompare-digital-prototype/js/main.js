$.getJSON("data/json/profiles.json", {})
.done(function(data) {
    var dataset = {};
    $.each(data.items, function(i, item) {
        dataset[item.name] = item;
        console.log('item = { name : ' + item.name + ', totalvalue : ' + item.totalvalue + ' }');
    });
    var user = data.users.user;
    var active_user = data.users.active_user;
    buildVisualization(dataset, user, active_user);
});
