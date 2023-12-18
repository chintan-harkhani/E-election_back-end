const { CountService } = require("../service");

// List
const BJPList = async (req, res) => {
    try {
        const List = await CountService.BJPList();

        const bjpRecords = List.filter(record => record.party && record.party.party_name === "BJP");
        res.status(200).json({
            success: true,
            message: "BJP Vote SuccessFully Display Get !.....",
            data: bjpRecords
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

const BJPListCount = async (req, res) => {
    try {
        const List = await CountService.BJPList();

        let countBJP = 0;
        List.forEach(record => {
            if (record.party && record.party.party_name === "BJP") {
                countBJP++;
            }
        });
        res.status(200).json({
            success: true,
            message: "BJP Vote Count SuccessFully Display Get !.....",
            data: countBJP
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

module.exports = {
    BJPList,
    BJPListCount
}