import Challenge from "../models/Challenge";
import User from "../models/User";

class ChallengeController {
  async store(request, response) {
    const {
      title,
      description,
      deadline,
      requester,
      assignee,
      status,
      difficulty,
    } = request.body;

    const { user_id } = request.params;

    // Buscando o user pelo ID
    const user = await User.findByPk(user_id);

    if (!user) {
      return response.json({
        error: "User not found",
      });
    }

    const challenge = await Challenge.create({
      title,
      description,
      deadline,
      requester,
      assignee,
      status,
      difficulty,
      user_id,
    });

    return response.json({
      message: "Challenge Created sucessfuly",
      challenge,
    });
  }

  async index(request, response) {
    const orderById = (array) =>
      array.sort(function (a, b) {
        return a.id - b.id;
      });

    let challenges = await Challenge.findAll();

    challenges = orderById(challenges);

    const count = challenges.length;

    response.set("x-total-count", challenges.length);

    // Filter Params for pagination
    const { _page, _limit } = request.query;

    if (_page && _limit) {
      let page = _page * _limit - _limit;

      let challangesByPage = await Challenge.findAndCountAll({
        limit: _limit,
        offset: page,
      });

      challangesByPage = orderById(challangesByPage.rows);

      console.log(challangesByPage);

      return response.json({
        count,
        challenges: challangesByPage,
      });
    }

    return response.json({
      count,
      challenges,
    });
  }

  async listByIndex(request, response) {
    const { index } = request.params;

    const challenge = await Challenge.findOne({
      where: { id: index },
    });

    if (!challenge) {
      return response.status(404).json({ error: "Challenge not found" });
    }

    response.json(challenge);
  }

  async listByUser(request, response) {
    const { user_id } = request.params;

    const user = await User.findByPk(user_id, {
      include: { association: "challenges" },
    });

    if (!user) {
      return response.status(404).json({
        error: "User not found",
      });
    }

    response.json(user.challenges);
  }

  async update(request, response) {
    const { index } = request.params;

    const challenge = await Challenge.findByPk(index);

    console.log(challenge);

    // Check if challenge exists
    if (challenge === null) {
      return response.status(404).json({ error: "Challenge not found" });
    }

    try {
      const challengeUpdated = await challenge.update(request.body);

      return response.json({
        massage: "Challenge Updated",
        challengeUpdated,
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: "Unknow error" });
    }
  }

  async delete(request, response) {
    const { index } = request.params;

    const challenge = await Challenge.findByPk(index);

    if (challenge === null) {
      return response.status(404).json({ error: "Challenge not found" });
    }

    const challengeDeleted = await challenge.destroy({
      where: { id: index },
    });

    response.json({
      message: "Challenge Deleted",
      challengeDeleted,
    });
  }
}

export default new ChallengeController();
