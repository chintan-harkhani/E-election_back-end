const { PartyModel} = require("../model");

//create
    const CreateParty =     async (reqBody) =>{
         return  PartyModel.create(reqBody);
    }
    //find Party name
const FindName = async (party_name) => {
    return PartyModel.findOne({ party_name });
}
// party list
const PartyList = async (req, res) => {
    return PartyModel.find()
};
//party id
const partyId = async (partyId) => {
    return PartyModel.findById(partyId)
};
//delete party
const DeleteParty = async (partyId) => {
    return PartyModel.findByIdAndDelete(partyId)
};
module.exports = {
    CreateParty,
    FindName,
    PartyList,
    partyId,
    DeleteParty,
}