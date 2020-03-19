const compose = (...funcs) => comp => funcs.reduceRight((prevResult, func) => func(prevResult), comp)

export default compose;