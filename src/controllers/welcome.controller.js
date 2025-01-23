// internal imports
import ApiResponse from "../utils/ApiResponse.js";

const repoLink = 'https://github.com/AnikAdhikari7/xpress-init';

export const welcome = (req, res) => {
    const htmlResponse = `<p>Welcome to xpress-init!! Code and "How to use?" available at <a href="${repoLink}">[GitHub Repo]</a></p>`;
    const jsonResponse = {
        message: 'Welcome to xpress-init!!',
        code: repoLink,
        'howToUse?': `${repoLink}/blob/main/README.md`,
    };
    const textResponse = `Welcome to xpress-init!! Code and "How to use?" available at [GitHub Repo]: ${repoLink}`;

    if (req.accepts('html')) {
        res.status(200).send(htmlResponse);
    } else if (req.accepts('json')) {
        res.status(200).json(new ApiResponse(200, jsonResponse, 'Welcome to xpress-init!!'));
    } else {
        res.status(200).type('txt').send(textResponse);
    }
};