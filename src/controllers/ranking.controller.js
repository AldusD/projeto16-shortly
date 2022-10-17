import STATUS from "../enums/status.js";
import * as repository from "../repositories/rankings.repository.js";

const getRanking = async (req, res) => {
    
    try {
        const ranking = await repository.selectRanking();
        
        return res.status(STATUS.OK).send([...ranking.rows]);

    } catch (error) {
        console.log(error);
        return res.sendStatus(STATUS.SERVER_ERROR);
    }
}

export { getRanking };