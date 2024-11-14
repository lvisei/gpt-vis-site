from pathlib import Path

import setuptools

this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()

setuptools.setup(
    name="streamlit-gpt-vis",
    version="0.0.1",
    author="lvisei",
    author_email="yunji.me@outlook.com",
    description="Components for GPTs, generative AI, and LLM projects. Not only UI Components.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/antvis/GPT-Vis/bindings/streamlit-gpt-vis",
    license="MIT",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[],
    python_requires=">=3.7",
    install_requires=[
        # By definition, a Custom Component depends on Streamlit.
        # If your component has other Python dependencies, list
        # them here.
        "streamlit >= 0.63",
    ]
)
