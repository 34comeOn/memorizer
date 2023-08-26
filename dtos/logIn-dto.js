module.exports = class LogInDto {
    id;
    email;
    userName;
    subscription;
    currentCollection;
    userCollectionsData;
    activationLink;
    isActivated;

    constructor(model) {
        this.id = model._id;
        this.email = model.email;
        this.userName = model.userName;
        this.subscription = model.subscription;
        this.currentCollection = model.currentCollection;
        this.userCollectionsData = model.userCollectionsData;
        this.activationLink = model.activationLink;
        this.isActivated = model.isActivated;
    }
}
