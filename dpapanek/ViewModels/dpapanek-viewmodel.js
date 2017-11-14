function dpapanekViewModel() {
    var self = this;
    self.skill_categories = ko.observableArray([]);
    self.projects = ko.observableArray([]);

    $.get('/api/skill_category', function (skill_categories) {
        console.log(skill_categories);
        self.skill_categories(skill_categories);
    });

    $.get('/api/projects', function (projects) {
        projects.forEach(function (project) {
            project.shown = ko.observable(1);
            console.log(project);
            self.projects.push(project);
        });
    });

    self.changeShown = function (project, direction) {
        project.shown(project.shown() + direction);
    };

}

ko.applyBindings(new dpapanekViewModel());