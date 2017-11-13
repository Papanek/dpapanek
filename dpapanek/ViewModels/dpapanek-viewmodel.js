function dpapanekViewModel() {
    var self = this;
    self.skill_category = ko.observableArray([]);

    $(document).ready(function () {
        $.get('/api/skill_category', function (skillx) {
            console.log(skillx);
            self.skill_category(skillx);
        });
    });
}

ko.applyBindings(new dpapanekViewModel());