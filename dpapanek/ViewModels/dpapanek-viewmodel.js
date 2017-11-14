function dpapanekViewModel() {
    var self = this;
    self.skill_categories = ko.observableArray([]);
    self.projects = ko.observableArray([]);

    $.get('/api/skill_category', function (skill_categories) {
        console.log(skill_categories);
        self.skill_categories(skill_categories);
    });

    $.get('/api/projects', function (projects) {
        console.log(projects);
        self.projects(projects);
    });
}

ko.applyBindings(new dpapanekViewModel());