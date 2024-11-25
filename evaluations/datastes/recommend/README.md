# 图表推荐数据集

该文件夹中提供用于评测/微调大模型在“图表推荐”任务上能力的数据集。图表推荐任务在这里指，根据数据推荐适合展示数据的图表

数据集目前涵盖了 16 种图表类型，每种图表类型下 1-3 个不同数据场景，每个场景下 15+ 个图表数据。数据会持续更新，也欢迎向我们贡献你的使用场景中收集的图表数据～

## 数据集说明

### 原始图表数据

数据按照图表类型进行图表类型分为不同文件夹，图表数据按照数据场景划分为不同文件。例如柱形图 `column` 包含两个文件 `01_base.json` 为基础柱形图数据，`02_split.json` 为带拆分的柱形图。

每条数据中 `source` 为用户输入，`source.data` 为输入的原始数据，`source.meta` 为输入的数据的元信息，主要是字段名和字段数值类型，推荐时两个信息可以缺少其中之一。`target` 为推荐的图表类型和图表配置中的字段映射。数据示例：

```json
{
  "source": {
    // 数据字段元信息
    "metas": [
      { "name": "城市", "dataType": "string" },
      { "name": "人口", "dataType": "number" }
    ],
    // 原始数据
    "data": [
      { "城市": "北京", "人口": 2154 },
      { "城市": "上海", "人口": 2424 },
      { "城市": "广州", "人口": 1530 }
    ]
  },
  "target": [
    {
      "type": "column",
      "encode": {
        "x": ["城市"], // x 轴字段
        "y": ["人口"] // y 轴字段
      }
    }
  ]
}
```

### 模型微调数据集

`gpt_vis_train.jsonl` 文件是我们使用上述原始图表数据集生成的微调训练数据集。生成策略如下：每种图表随机抽取一半的 case （剩余数据用作评测），由于每种图表原始数据条数不同，为避免图表数量不均衡影响推荐结果，通过将部分图表数据重复一定次数，保证每种图表在训练集中有 60 条数据。

### 评测结果文件

`metrics.json` 文件是我们执行模型微调后，用模型评测的结果，其中每条数据的 `source` 为原始输入，`target` 为期望输出，`generation` 为模型输出，`correctness` 为图表类型是否推荐正确，`encodeScore` 为图表配置推荐结果的打分。评测指标的计算参考 `eval/eval-recommend.js` 文件。

## 模型推荐图表效果说明

我们使用上述数据集，基于 `qwen2.5-14b-instruct` 微调后的图表类型准确率可达 89%，`encode` 准确率达 82%。

需要注意的是，模型推荐在大部分场景下能够满足“给出数据，返回图表及配置”的需求，但模型输出不完全可控，存在输出结果不合法、输出的图表无法绘制成功等情况。推荐结合 [@antv/ava](https://ava.antv.antgroup.com/api/advice/advisor) 中的推荐模块使用，在模型效果不佳或者传统规则已满足推荐需求的场景下，可以使用规则推荐的工程链路进行兜底。