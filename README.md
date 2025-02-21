# PDF Merger Tool

A simple Node.js tool to merge multiple PDF files using pdf-merger-js.

## About

This tool is built on top of the following open source libraries:

- [pdf-merger-js](https://github.com/nbesli/pdf-merger-js) - A lightweight JavaScript library for merging PDF files
- [Node.js](https://nodejs.org/) - JavaScript runtime environment

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/pdf-merger.git
cd pdf-merger
```

2. Install dependencies:

```bash
npm install
```

## Usage

1. Place your PDF files in the `input` directory
2. Run the merger tool:

```bash
node index.js
```

3. Find your merged PDF in the `output` directory as `merged.pdf`

## Configuration

You can customize the merger settings by modifying `config.js`:

- Input directory path
- Output directory path
- Output filename
- File ordering preferences

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
