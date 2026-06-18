import Counter from "../models/Counter.js";

export const createCounter =
async (req, res) => {

    try {

        const {
            counterNumber,
            counterName
        } = req.body;

        const counter =
            await Counter.create({
                counterNumber,
                counterName
            });

        res.status(201).json(counter);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

export const getCounters =
async (req, res) => {

    try {

        const counters =
            await Counter.find()
            .populate(
                "assignedStaff",
                "name"
            );

        res.json(counters);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

export const updateCounterStatus =
async (req, res) => {

    try {

        const counter =
            await Counter.findById(
                req.params.id
            );

        if (!counter) {

            return res.status(404).json({
                message: "Counter Not Found"
            });

        }

        counter.status =
            req.body.status;

        await counter.save();

        res.json(counter);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};