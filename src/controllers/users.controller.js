import STATUS from "../enums/status.js";
import * as repository from '../repositories/users.repository.js';

const getsUserData = async (req, res) => {
    const { userId } = res.locals.user;

    try {
        const userInfo = await repository.selectUserWithVisitCount(userId);
        const userShorts = await repository.selectUserShorts(userId);
        const { id, name, visitCount } = userInfo.rows[0];

        return res.status(STATUS.OK).send({
            id, name, visitCount,
            shortenedUrls: [
                ...userShorts.rows
            ] 
        });
    } catch (error) {
        console.log(error);
        return res.sendStatus(STATUS.SERVER_ERROR);
    }
}

export { getsUserData };