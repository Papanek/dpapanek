function dpapanekViewModel() {
    var self = this;
    self.skill_categories = ko.observableArray([]);

    $.get('/api/skill_category', function (categories) {
        console.log(categories);

        categories.forEach(function (category) {
            self.skill_categories.push(category);

            console.log(category);
            category.skills.forEach(function (skill) {
                console.log(skill.title);
            });
        });

        //self.skill_categories(categories);
    });
}

ko.applyBindings(new dpapanekViewModel());