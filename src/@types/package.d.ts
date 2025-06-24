declare namespace apm {
    interface PackagesV3 {
        version: 3;
        packages: Package[];
    }

    interface Package {
        id: string;
        name: string;
        overview: string;
        description: string;
        developer: string;
        originalDeveloper?: string;
        dependencies?: string[];
        conflicts?: string[];
        provides?: string[];
        pageURL: string;
        downloadURLs: string[];
        directURL?: string;
        latestVersion: string;
        isContinuous?: false | boolean;
        installer?: string;
        installerArg?: string;
        nicommons?: string;
        isHidden?: false | boolean;
        files: FileInfo[];
        releases?: ReleaseData[];
    }

    interface FileInfo {
        filename: string;
        isUninstallOnly?: false | boolean;
        isInstallOnly?: false | boolean;
        isDirectory?: false | boolean;
        archivePath?: string;
        isObsolete?: false | boolean;
    }

    interface ReleaseData {
        version: string;
        integrity: { archive: string; file: FileIntegrityData[] };
    }

    interface FileIntegrityData {
        target: string;
        hash: string;
    }
}
