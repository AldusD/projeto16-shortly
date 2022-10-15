import { nanoid } from "nanoid";

import * as repository from '../repositories/urls.repository.js';
import STATUS from "../enums/status.js";

const createShorten = async (req, res, next) => {
    const { userId } = res.locals.user;
    const url = res.locals.url;
    const shortUrl = nanoid(); // generates random code that is going to be used as shortUrl

    // insert shorten on db
    try {
        const shorten = await repository.insertShorten(shortUrl, url, userId);
        return res.status(STATUS.CREATED).send({ shortUrl });
    } catch (error) {
        console.log(error);
        return res.sendStatus(STATUS.SERVER_ERROR);
    }
}

export { createShorten };