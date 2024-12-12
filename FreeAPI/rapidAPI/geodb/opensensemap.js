//  https://publicapi.dev/open-sense-map-api
//  https://api.opensensemap.org/
// This is the openSenseMap API running on https://api.opensensemap.org
// Version: v11.3.0
// You can find a detailed reference at https://docs.opensensemap.org

// Routes requiring no authentication:
// GET    /                                     Reference: https://docs.opensensemap.org/#api-Misc-printRoutes
// GET    /stats                                Reference: https://docs.opensensemap.org/#api-Misc-getStatistics
// GET    /tags                                 Reference: https://docs.opensensemap.org/#api-Boxes-getAllTags
// GET    /statistics/idw                       Reference: https://docs.opensensemap.org/#api-Interpolation-calculateIdw
// GET    /statistics/descriptive               Reference: https://docs.opensensemap.org/#api-Statistics-descriptive
// GET    /boxes                                Reference: https://docs.opensensemap.org/#api-Boxes-getBoxes
// GET    /boxes/data                           Reference: https://docs.opensensemap.org/#api-Measurements-getDataMulti
// GET    /boxes/data/bytag                     Reference: https://docs.opensensemap.org/#api-Measurements-getDataByGroupTag
// GET    /boxes/:boxId                         Reference: https://docs.opensensemap.org/#api-Boxes-getBox
// GET    /boxes/:boxId/sensors                 Reference: https://docs.opensensemap.org/#api-Measurements-getLatestMeasurements
// GET    /boxes/:boxId/sensors/:sensorId       Reference: https://docs.opensensemap.org/#api-Measurements-getLatestMeasurementOfSensor
// GET    /boxes/:boxId/data/:sensorId          Reference: https://docs.opensensemap.org/#api-Measurements-getData
// GET    /boxes/:boxId/locations               Reference: https://docs.opensensemap.org/#api-Measurements-getLocations
// POST   /boxes/data                           Reference: https://docs.opensensemap.org/#api-Measurements-getDataMulti
// POST   /boxes/:boxId/data                    Reference: https://docs.opensensemap.org/#api-Measurements-postNewMeasurements
// POST   /boxes/:boxId/:sensorId               Reference: https://docs.opensensemap.org/#api-Measurements-postNewMeasurement
// POST   /users/register                       Reference: https://docs.opensensemap.org/#api-Users-register
// POST   /users/request-password-reset         Reference: https://docs.opensensemap.org/#api-Users-request-password-reset
// POST   /users/password-reset                 Reference: https://docs.opensensemap.org/#api-Users-password-reset
// POST   /users/confirm-email                  Reference: https://docs.opensensemap.org/#api-Users-confirm-email
// POST   /users/sign-in                        Reference: https://docs.opensensemap.org/#api-Users-sign-in
// POST   /users/refresh-auth                   Reference: https://docs.opensensemap.org/#api-Users-refresh-auth

// Routes requiring valid authentication through JWT:
// GET    /users/me                             Reference: https://docs.opensensemap.org/#api-Users-getUser
// PUT    /users/me                             Reference: https://docs.opensensemap.org/#api-Users-updateUser
// GET    /users/me/boxes                       Reference: https://docs.opensensemap.org/#api-Users-getUserBoxes
// GET    /users/me/boxes/:boxId                Reference: https://docs.opensensemap.org/#api-Users-getUserBox
// GET    /boxes/:boxId/script                  Reference: https://docs.opensensemap.org/#api-Boxes-getSketch
// POST   /boxes                                Reference: https://docs.opensensemap.org/#api-Boxes-postNewBox
// POST   /boxes/claim                          Reference: https://docs.opensensemap.org/#api-Boxes-claimBox
// POST   /boxes/transfer                       Reference: https://docs.opensensemap.org/#api-Boxes-createTransfer
// DELETE /boxes/transfer                       Reference: https://docs.opensensemap.org/#api-Boxes-removeTransfer
// GET    /boxes/transfer/:boxId                Reference: https://docs.opensensemap.org/#api-Boxes-getTransfer
// PUT    /boxes/transfer/:boxId                Reference: https://docs.opensensemap.org/#api-Boxes-updateTransfer
// PUT    /boxes/:boxId                         Reference: https://docs.opensensemap.org/#api-Boxes-updateBox
// DELETE /boxes/:boxId                         Reference: https://docs.opensensemap.org/#api-Boxes-deleteBox
// DELETE /boxes/:boxId/:sensorId/measurements  Reference: https://docs.opensensemap.org/#api-Measurements-deleteMeasurements
// POST   /users/sign-out                       Reference: https://docs.opensensemap.org/#api-Users-sign-out
// DELETE /users/me                             Reference: https://docs.opensensemap.org/#api-Users-deleteUser
// POST   /users/me/resend-email-confirmation   Reference: https://docs.opensensemap.org/#api-Users-request-email-confirmation -->